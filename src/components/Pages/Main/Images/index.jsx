import s from './Images.module.css';
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Images = () => {
    const [images] = useState([
        {
            link: "/chat",
            title: "CHAT",
            description: "Skontaktuj się z korepetytorem lub innymi uczniami",
            img: "https://platform.text.com/resource-center/liveChat-banner.png",
            alt: "chat",
            class: s.image1
        }, {
            link: "/plan",
            title: "PLAN",
            description: "Zaplanuj swoje zajęcia, zapisz się na lekcje, sprawdź swoje osiągnięcia",
            img: "https://static.vecteezy.com/system/resources/previews/004/335/426/original/planning-icon-illustration-planning-strategy-infographic-template-presentation-concept-banner-pictogram-icon-set-icons-vector.jpg",
            alt: "plan zajęć",
            class: s.image2
        }, {
            link: "/grades",
            title: "GRADES",
            description: "Dostawaj oceny za wykonane zadania, a najlepsze wyniki zostaną nagrodzone (dodatkowe punkty)",
            img: "https://ireneuszczyzewski.pl/wp-content/uploads/2023/01/k-14.png",
            alt: "oceny",
            class: s.image3
        }
    ])
    return (
        <div className={s.images_bg}>
            <div className={s.images_frame}>
                {images.map((el, index) => (
                    <NavLink key={index} to={el.link} className={`${s.image_container} ${el.class}`}>
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                        <img src={el.img} alt={el.alt}/>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Images;