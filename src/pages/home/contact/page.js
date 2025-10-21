import Picture from "../../../ui/atoms/aPicture"
import Form from "../../../ui/molecules/Form"
import TitleSection from "../../ui/atoms/TitleSection"

export default function Contact() {
    return (
        <section id="contact" className="py-10 px-20 flex flex-col items-center">
            <Picture
                src='/avatar.png'
                alt='Avatar Jhon'
                size='10'
            />

            <TitleSection
                title='Hablemos de Ideas'
                textAlign="center"
                color="#e0e0e0"
            />

            <Form />
        </section>
    )
}

