'use client'
import { useEffect, useState } from "react";
import SectionTag from "../SectionTag/sectionTag";
import ContactUs from "../UI-Components/ContactUs/ContactUs";

export default function Contato() {

    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" })
    const [messages, setMessages] = useState([])
    const [status, setStatus] = useState(false)
    const [lastMessage, setLastMessage] = useState({ nome: "", protocolo: 0 })
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('mensagens')) || []
        setMessages(messages)
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const generateProtocol = () => {
        const protocol = Math.floor(Math.random() * 9000) + 1000
        const exists = messages.filter(message => message.protocolo && message.protocolo === protocol)
        if (exists.length > 0) {
            return generateProtocol()
        } else {
            return protocol
        }
    }

    useEffect(() => {
        localStorage.setItem('mensagens', JSON.stringify(messages))
    }, [messages])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const protocol = generateProtocol()

        setSending(true)
        setStatus(false)
        setError(false)

        console.log("Dados do env: ", process.env)
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    subject: `Novo contato pelo site SnapNote #${protocol}`,
                    nome: form.nome,
                    email: form.email,
                    mensagem: form.mensagem,
                    protocolo: protocol
                })
            })
            const result = await response.json()

            if (!result.success) throw new Error(result.message)

            setLastMessage({ ...lastMessage, nome: form.nome, protocolo: protocol })
            setMessages([...messages, { nome: form.nome, email: form.email, mensagem: form.mensagem, protocolo: protocol }])

            setStatus(true)
            setForm({ nome: "", email: "", mensagem: "" })
        } catch {
            setError(true)
        } finally {
            setSending(false)
        }

    }

    return (
        <section id="contact" className="grid w-full items-center gap-17.5 bg-brand-primary px-20 py-20 grid-cols-[1fr_1.4fr] max-[1250px]:px-7.5 max-[991px]:grid-cols-1 max-[850px]:px-7.5 max-[500px]:px-5">
            <div>
                <SectionTag name="Contato" color="white" />
                <h2 className="text-[clamp(42px,5vw,65px)] font-medium leading-[1.05] text-brand-snow">Vamos transformar<br />registros em<br /><span className="font-playfair text-brand-lime">memórias?</span></h2>
                <p className="mt-7.5 mb-5 text-brand-light-grey">Quer conhecer melhor o projeto ou compartilhar uma ideia? Fale com a nossa
                    equipe.</p>
                <a className="text-brand-lime border-b border-brand-lime" href="mailto:equipe@snapnote.com">equipe@snapnote.com ↗</a>
            </div>

            <ContactUs handleChange={handleChange} handleSubmit={handleSubmit} lastMessage={lastMessage} status={status} form={form} sending={sending} error={error}/>
        </section>
    );
}
