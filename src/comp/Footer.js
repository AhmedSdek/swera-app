import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import footerlog from '../comp/maverick logo M.png'
import { Stack } from "@mui/material";
function Footer(){
    return (
        <footer id="contact" style={{ padding: '40px 0 ', textAlign: 'left', backgroundColor: 'rgb(0 0 0 / 8%)' }}>
            <Container>
                <h2 className="footer-title">
                Contact
                </h2>
                <div style={{
                    paddingTop: '30px', color: 'white'
                }}>
                    <Stack sx={{ justifyContent: 'space-between', flexDirection: { sm: 'row' } }}>
                        <Stack sx={{ width: { md: '60%', sm: '100%' } }}>
                            <img style={{ width: '200px' }} src={footerlog} alt="" />
                            <p>
                                <strong>Real Estate Company </strong>
                                We are an egyption company working in filed of Realestate marketing
                            </p>
                        </Stack>
                        <Stack sx={{ width: { md: '30%', sm: '100%' } }}>
                            <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                                <div>
                                        <a href="https://www.facebook.com/MaverickforRealestate">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                </div>
                                <div>
                                        <a href="https://www.tiktok.com/@maverickforrealestate?fbclid=IwAR1DygCoTgeWOWMI3D76bMrWIR6K1T6xklIU01D91gcN91bbbs-FXTPoa6E">
                                            <FontAwesomeIcon icon={faTiktok} />

                                        </a>
                                </div>
                                <div>
                                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmaverickforrealestate%3Figshid%3DZDdkNTZiNTM%253D%26fbclid%3DIwAR1uYmARbjGx1GwUZmswPrq8lc5plzS5GwIUoUoR23IZ1uQxdStxUXLSK3w&h=AT0q9wOLcFThQfh1mmXHfrQocK_GNEZuQFquj6Fxw47CNTBtHP_PLsi-OacXcDsIuOKovmlzIhGvzVFS-zJJaqBwtMnIvNT7nbdHd7Aorq2anJyLO2iD6nCgzios3O_aVzX9cg"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </Stack>
                            <a style={{ display: 'block', textDecoration: 'none', padding: '5px 0' }} href="mailto:maverick.for.realestate@gmail.com"><i className="fa-regular fa-envelope"></i> Maverick Realestate@gmail</a>
                                <a style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }} href="tel:+201008582515"><i className="fa-solid fa-phone-volume"></i> +201008582515</a>
                        </Stack>
                    </Stack>
                </div>
            </Container>
        </footer>

    )
}
export default Footer;