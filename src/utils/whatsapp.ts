// WhatsApp utility functions
// School WhatsApp number - can be configured
export const SCHOOL_WHATSAPP_NUMBER = "919384813886"; // Format: country code + number without +

export interface InquiryFormData {
  studentFirstName: string;
  studentLastName: string;
  gender: string;
  dateOfBirth: string;
  academicYear: string;
  studentCategory: string;
  gradeApplyingFor: string;
  email: string;
  parentMobile: string;
  parentName: string;
  message: string;
}

export const createWhatsAppMessage = (data: InquiryFormData): string => {
  const message = `
*New Admission Inquiry - SR MAVERICKS*

*Student Details:*
📝 Name: ${data.studentFirstName} ${data.studentLastName}
👤 Gender: ${data.gender}
🎂 Date of Birth: ${data.dateOfBirth}

*Admission Details:*
📅 Academic Year: ${data.academicYear}
📋 Category: ${data.studentCategory}
🎓 Grade Applying For: ${data.gradeApplyingFor}

*Parent Details:*
👨‍👩‍👧 Parent Name: ${data.parentName}
📞 Mobile: ${data.parentMobile}
📧 Email: ${data.email}

*Message:*
${data.message || "No additional message"}
`.trim();

  return encodeURIComponent(message);
};

export const openWhatsAppChat = (message?: string): void => {
  const baseUrl = `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}`;
  const url = message ? `${baseUrl}?text=${message}` : baseUrl;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const sendInquiryToWhatsApp = (data: InquiryFormData): void => {
  const message = createWhatsAppMessage(data);
  openWhatsAppChat(message);
};
