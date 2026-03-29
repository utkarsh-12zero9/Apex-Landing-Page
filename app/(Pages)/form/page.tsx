"use client";

import { useState } from "react";
import "./PreviewForm.css";
import Link from "next/link";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CHECKOUT_URL =
  "https://courses.apexschoolofbusiness.com/s/preview/courses/AI-Powered-Sales-System-Training-for-B2B-69bf9eb18d8b3db3693ecb84#69b4ee21dec50bb1d4f08d2b";

interface FormData {
  fullName: string;
  workEmail: string;
  phone: string;
  linkedin: string;
  loomLink: string;
}

const initialForm: FormData = {
  fullName: "",
  workEmail: "",
  phone: "",
  linkedin: "",
  loomLink: "",
};

export default function PreviewFormPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file.");
        e.target.value = "";
        setResumeFile(null);
        return;
      }
      setError(null);
      setResumeFile(file);
    } else {
      setResumeFile(null);
    }
  };

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbweYLCSr6u-ByaSQXDpbY9-hbGxa04hpF_mR0-T734A7vis2M5ARBfASofDSybCmp9m/exec";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert file to base64 Data URL so it can be sent via POST request 
      // (Google Apps script will either store this base64 string or decode it into a Drive file)
      let base64Resume = "";
      if (resumeFile) {
        base64Resume = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(resumeFile);
        });
      }

      // Using safe camelCase keys for the POST payload
      const payload = new URLSearchParams();
      payload.append("fullName", form.fullName);
      payload.append("emailId", form.workEmail);
      payload.append("phoneNumber", form.phone);
      payload.append("linkedinUrl", form.linkedin);
      payload.append("resumeData", base64Resume);
      payload.append("loomLink", form.loomLink);

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = CHECKOUT_URL;
      } else {
        setError("Submission failed. Please try again.");
      }

    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="preview-form-page">
        <div className="preview-form-container">
          {/* Content */}
          <div className="preview-form-card">
            <h1 className="preview-form-title">Access Program Preview</h1>
            <p className="preview-form-subtitle">
              Enter your details to access the course preview and complete your application.
            </p>

            {/* Form */}
            <form className="preview-form" onSubmit={handleSubmit}>
              <div className="preview-form-grid">
                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-fullName">Full Name</label>
                  <input
                    id="pf-fullName"
                    className="preview-form-input"
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={form.fullName}
                    onChange={handleChange}
                    pattern="^[A-Za-z\s]+$"
                    title="Please enter a valid name (letters and spaces only)"
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-workEmail">Email ID</label>
                  <input
                    id="pf-workEmail"
                    className="preview-form-input"
                    type="email"
                    name="workEmail"
                    placeholder="Enter your official email"
                    value={form.workEmail}
                    onChange={handleChange}
                    pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-phone">Phone Number</label>
                  <input
                    id="pf-phone"
                    className="preview-form-input"
                    type="tel"
                    name="phone"
                    placeholder="Enter your contact number"
                    value={form.phone}
                    onChange={handleChange}
                    pattern="^\d{10}$"
                    title="Phone number must be exactly 10 digits"
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-linkedin">LinkedIn Profile URL</label>
                  <input
                    id="pf-linkedin"
                    className="preview-form-input"
                    type="text"
                    name="linkedin"
                    placeholder="Your LinkedIn Profile URL"
                    value={form.linkedin}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="preview-form-field full-width">
                  <label className="preview-form-label" htmlFor="pf-resume">Upload Resume</label>
                  <div className="file-upload-wrapper">
                    <input
                      id="pf-resume"
                      className="file-upload-input"
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      required
                    />
                    <div className="file-upload-content">
                      <svg xmlns="http://www.w3.org/2000/svg" className="file-upload-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="file-upload-text">
                        {resumeFile ? resumeFile.name : "Upload file"}
                      </span>
                    </div>
                  </div>
                  <p className="preview-form-helper">Upload your latest resume (Accepted: PDF)</p>
                </div>

                <div className="preview-form-field full-width">
                  <label className="preview-form-label" htmlFor="pf-loomLink">1-Minute Video Submission (Loom Link)</label>
                  <input
                    id="pf-loomLink"
                    className="preview-form-input"
                    type="url"
                    name="loomLink"
                    placeholder="Paste your Loom video link"
                    value={form.loomLink}
                    onChange={handleChange}
                    required
                  />
                  <div className="preview-form-instructions loom-instructions">
                    <p className="loom-instructions-title">Record a 1-minute video explaining:</p>
                    <ul className="loom-instructions-list">
                      <li>Your background</li>
                      <li>Why you want to join this program</li>
                      <li>Your interest in sales/marketing</li>
                    </ul>
                    <p className="loom-instructions-footer">Upload it on Loom and paste the link above.</p>
                  </div>
                </div>
              </div>

              <p className="preview-form-disclaimer">
                We will use your contact details only to share program details and assist you with next steps. Your information will remain confidential and will not be shared with any third party.
              </p>

              <button type="submit" className="preview-form-submit" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Unlock Program Preview"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {error && (
        <div className="preview-form-error-modal">
          <div className="preview-form-error-content">
            <h3 className="preview-form-error-title">Submission Failed</h3>
            <p className="preview-form-error-text">{error}</p>
            <button className="preview-form-error-close" onClick={() => setError(null)}>
              Try Again
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
