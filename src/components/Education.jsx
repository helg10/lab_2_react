import { STYLES } from "./styles/theme";
function Education(){
    return (
        <section className={STYLES.card}>

            <h2 className={STYLES.title}>Навчання та освіта</h2>
            <p className="text-stone-700">
                Навчаюся на 2 курсі в ІКТА Національного університету "Львівська Політехніка" на спеціальності<br/>
                <a href="https://directory-new.lpnu.ua/majors/subject/ikta/6.F5.00.01/8/2025/ua/full/6/22860" 
                target="_blank" 
                title="Моя навчальна програма"
                className={STYLES.link}>
                <span className="font-bold text-[#8c532b]">"Кібербезпека та захист інформації (F5)"</span></a>
            </p>
            <p className="text-stone-700">
                Закінчив курс <span className="font-bold text-[#8c532b]">Linux network administration</span> від компанії <em>PortaOne</em>
            </p>

        </section>
    );
}
export default Education;