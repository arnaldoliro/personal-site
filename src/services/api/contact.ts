export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    if (res.status === 429) throw new Error("RATE_LIMITED");
    if (res.status === 400) throw new Error("VALIDATION_ERROR");
    throw new Error("Erro ao enviar mensagem");
  }

  return res.json();
}
