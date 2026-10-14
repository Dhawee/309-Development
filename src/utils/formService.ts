export interface EnquirySubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  offering: string; // e.g., 'Verdant Vine', 'Verdant Leisure', 'General'
  parcelSize: string; // 'Plot', 'Acre', 'Hectare', 'Other'
  inspectionDate?: string;
  notes?: string;
  submittedAt: string;
  type: 'general' | 'inspection' | 'ambassador';
}

export interface AmbassadorRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experienceYears: string;
  realtorGroup?: string;
  notes?: string;
  submittedAt: string;
}

export const submitEnquiry = async (
  data: Omit<EnquirySubmission, 'id' | 'submittedAt'>
): Promise<{ success: boolean; message: string; id: string }> => {
  // Simulate network latency (400-700ms)
  await new Promise((res) => setTimeout(res, 500));

  // Basic validation check
  if (!data.fullName || !data.email || !data.phone) {
    throw new Error('Please provide your full name, email address, and active telephone number.');
  }

  const submission: EnquirySubmission = {
    ...data,
    id: 'ENQ-' + Date.now().toString().slice(-6),
    submittedAt: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem('309_enquiries') || '[]');
    existing.push(submission);
    localStorage.setItem('309_enquiries', JSON.stringify(existing));
  } catch {
    // Graceful fallback if storage disabled
  }

  return {
    success: true,
    message: 'Your enquiry has been received successfully. A dedicated 309 Development property advisor will contact you within 24 hours.',
    id: submission.id,
  };
};

export const submitAmbassadorRegistration = async (
  data: Omit<AmbassadorRegistration, 'id' | 'submittedAt'>
): Promise<{ success: boolean; message: string; id: string }> => {
  await new Promise((res) => setTimeout(res, 600));

  if (!data.fullName || !data.email || !data.phone) {
    throw new Error('Full Name, Email and Phone Number are required for 309 Ambassador onboarding.');
  }

  const record: AmbassadorRegistration = {
    ...data,
    id: 'AMB-' + Date.now().toString().slice(-6),
    submittedAt: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem('309_ambassador_registrations') || '[]');
    existing.push(record);
    localStorage.setItem('309_ambassador_registrations', JSON.stringify(existing));
  } catch {
    // Graceful fallback
  }

  return {
    success: true,
    message: 'Welcome! Your 309 Ambassador registration has been submitted. Our realtor onboarding team will contact you with orientation materials and portfolio credentials.',
    id: record.id,
  };
};

export const createWhatsAppUrl = (topic: string, details?: Record<string, string>): string => {
  const phone = '2349167118929';
  let message = `Hello 309 Development Ltd., I am reaching out regarding ${topic}.`;
  
  if (details) {
    const detailLines = Object.entries(details)
      .filter(([_, v]) => Boolean(v))
      .map(([k, v]) => `• ${k}: ${v}`)
      .join('\n');
    if (detailLines) {
      message += `\n\nMy Details:\n${detailLines}`;
    }
  }
  
  message += '\n\nPlease provide me with verified project details and next steps.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
