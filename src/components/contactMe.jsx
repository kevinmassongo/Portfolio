import { useRef } from "react";
import emailjs from '@emailjs/browser'
import Title from "./title";
import Text from "./text";

function ContactMe() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qyk3a9k', 'template_x9qxsty', form.current, {
                publicKey: 'GzkJkScXHgJT91lGE',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className="contact">
                <Title style="title-contact">Envoyez un message !</Title>
                <Text style="text-contact">Vous avez une question ou une proposition, ou vous souhaitez simplement
dire bonjour ? Allez-y.</Text>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="container">
                        <div className="box">
                            <div>
                                <label>Votre nom</label>
                            </div>
                            <input type="text" name="from_name" placeholder="Entez votre nom" />
                        </div>
                        <div className="box">
                            <div>
                                <label>Votre email</label>
                            </div>
                            <input type="email" name="from_email" placeholder="Entez votre email" />
                        </div>
                    </div>
                    <div className="box-message">
                        <label className="message">Message</label>
                        <textarea name="message" placeholder="Entrez votre message" />
                    </div>
                    <input type="submit" value="Envoyer" className="envoyer" />
                </form>
            </div>
        </>
    )
}

export default ContactMe;