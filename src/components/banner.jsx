import Name from "./name";
import Paragraph from "./paragraph";
import Text from "./text";
import Links from "./link";
import Picture from "./picture";

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <Paragraph>Salut 🙌, je m'appelle</Paragraph>
                    <Name>Kevin Massongo</Name>
                    <Paragraph>Et je suis un <span className="text">Développeur FullStack</span></Paragraph>
                    <Text style="text-banner">Je suis un concepteur de sites web avec une expérience depuis plus d'une année, mon expertise est de créer et de concevoir des sites web, frontend design et backend design.</Text>
                    <div className="download">
                        <Links href="https://cvdesignr.com/p/64dcc6db113c4" style="downloadCV">Télecharger CV</Links>
                        <Links href="mailto:kevinmassongo2001@gmail.com" style="callMe">Ecrivez-moi</Links>
                    </div>
                    <div className="reseauxSociaux">
                        <Paragraph>Réseaux sociaux</Paragraph>
                        <div className="box">
                            <div className="container">
                                <a href="https://github.com/kevinmassongo" target="_blank">
                                    <svg fill="#000000" width="80px" height="50px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path fill="#808184" d="M0 15c0 7.033 4.836 12.945 11.375 14.563.3.077.635-.19.625-.5V22.5c0-.333.197-.652.563-.844.37-.185.28-.856-.125-.937-1.9-.38-3.52-1.143-4.657-2.157C6.646 17.547 6 16.314 6 15c0-.915.327-1.793.906-2.594.06-.082.092-.18.094-.28V7.343l3.97 2.125c.122.066.273.077.405.03C12.488 9.168 13.698 9 15 9s2.512.168 3.625.5c.132.047.283.035.406-.03L23 7.343v4.78c.002.1.035.2.094.282.58.8.906 1.68.906 2.594 0 1.315-.645 2.548-1.78 3.563-1.138 1.014-2.76 1.776-4.657 2.156-.406.08-.495.75-.125.936.365.192.562.51.562.844v6.563c-.01.31.326.577.625.5C25.165 27.945 30 22.032 30 15c0-8.278-6.722-15-15-15C6.722 0 0 6.722 0 15zM15 1c7.738 0 14 6.262 14 14 0 6.33-4.24 11.547-10 13.28V22.5c0-.4-.154-.756-.375-1.063 1.663-.457 3.182-1.175 4.28-2.156C24.206 18.124 25 16.64 25 15c0-1.083-.394-2.074-1-2.97V6.5c.003-.35-.446-.613-.75-.437L18.656 8.53C17.516 8.22 16.296 8 15 8c-1.295 0-2.517.218-3.656.53L6.75 6.064c-.304-.176-.753.087-.75.437v5.53c-.606.896-1 1.887-1 2.97 0 1.64.795 3.123 2.094 4.28 1.1.982 2.62 1.7 4.28 2.158-.22.306-.374.66-.374 1.062v1.688c-1.09.406-1.807.493-2.25.406-.478-.094-.736-.34-1.03-.75-.592-.823-1.173-2.34-3.095-2.836-.654-.175-.875.8-.25.97 1.508.39 1.805 1.448 2.53 2.46.364.505.886.973 1.658 1.125.643.126 1.422.03 2.437-.313v3.03C5.242 26.548 1 21.33 1 15 1 7.262 7.262 1 15 1z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/kevin-massongo" target="_blank">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="80px" height="50px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                                        <g>
                                            <path fill="#808184" d="M12.5,12h-3C9.224,12,9,12.224,9,12.5v11C9,23.776,9.224,24,9.5,24h3c0.276,0,0.5-0.224,0.5-0.5v-11
		C13,12.224,12.776,12,12.5,12z M12,23h-2V13h2V23z"/>
                                            <path fill="#808184" d="M11,7C9.897,7,9,7.897,9,9s0.897,2,2,2s2-0.897,2-2S12.103,7,11,7z M11,10c-0.552,0-1-0.449-1-1
		s0.448-1,1-1s1,0.449,1,1S11.552,10,11,10z"/>
                                            <path fill="#808184" d="M19.515,11.986c-0.534,0-1.097,0.119-1.554,0.32C17.886,12.126,17.707,12,17.5,12h-3
		c-0.276,0-0.5,0.224-0.5,0.5v11c0,0.276,0.224,0.5,0.5,0.5h3c0.276,0,0.5-0.224,0.5-0.5l-0.002-6.661
		c0-0.003-0.012-0.336,0.2-0.565C18.365,16.092,18.65,16,19.044,16C19.696,16,20,16.279,20,16.879V23.5c0,0.276,0.224,0.5,0.5,0.5h3
		c0.276,0,0.5-0.224,0.5-0.5v-6.842C24,13.21,21.584,11.986,19.515,11.986z M23,23h-2v-6.121C21,15.72,20.251,15,19.044,15
		c-0.684,0-1.216,0.2-1.581,0.595c-0.507,0.549-0.468,1.246-0.463,1.284V23h-2V13h2v0.355c0,0.276,0.224,0.5,0.5,0.5
		c0.245,0,0.448-0.176,0.491-0.408c0.134-0.146,0.722-0.46,1.523-0.46c0.817,0,3.485,0.265,3.485,3.671V23z"/>
                                            <path fill="#808184" d="M16-0.035C7.158-0.035-0.034,7.159-0.034,16S7.158,32.035,16,32.035S32.034,24.841,32.034,16
		S24.842-0.035,16-0.035z M16,30.965C7.748,30.965,1.034,24.252,1.034,16S7.748,1.035,16,1.035S30.966,7.748,30.966,16
		S24.252,30.965,16,30.965z"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="proverb">
                        <Text>« Choisissez un travail que vous aimez et vous n’aurez jamais à travailler un seul jour de votre vie. » - Confucius</Text>
                    </div>
                </div>
                <div className="picture-container">
                    <Picture src="./src/images/picture.jpg" style="picture" />
                </div>
            </div>
        </>
    )
}
export default Banner;