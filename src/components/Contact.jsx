import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/global.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual service details
      const serviceId = 'your_service_id'
      const templateId = 'your_template_id'
      const publicKey = 'your_public_key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'owner@example.com' // Replace with actual owner email
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address</h3>
              <p>123 Food Street, Culinary City, FC 12345</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/c/4915738200469" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your inquiry..."
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact