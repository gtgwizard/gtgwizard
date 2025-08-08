"use server"

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

export async function submitContact(prevState: any, formData: FormData) {
  await sleep(600)
  const email = String(formData.get("email") || "")
  const subject = String(formData.get("subject") || "")
  const message = String(formData.get("message") || "")

  if (!email.includes("@") || subject.length < 3 || message.length < 5) {
    return { ok: false, message: "Please provide a valid email, subject, and message." }
  }

  // Here you could save to a DB or forward to a helpdesk.
  return { ok: true, message: "Thanks! Your message has been received. We'll get back to you soon." }
}
