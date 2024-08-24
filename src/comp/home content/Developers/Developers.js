import './developers.css';
import { Link} from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import MavLoading from "../../Loading/MavLoading";
import { Box, Container, Stack } from "@mui/material";
function Developers(){
    const [value, loading, error] = useCollection(collection(db, 'admin'));
    if (value) {
        return (
            <>
                <Box sx={{ minHeight: 'calc(100vh - 140px)', padding: '70px 0' }}>
                    <h1 className="developers-title">DEVELOPERS FULL LIST</h1>
                    <Container>
                        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                            {value.docs.map((product) => {
                                console.log(product.data())
                                return (
                                    <Stack className="colDev" key={product.id} sx={{ width: '120px', height: '120px', borderRadius: '50%' }} >
                                        <Link style={{ width: '120px', height: '120px', padding: '0', borderRadius: '50%' }} className="logo hoveredLogo d-flex align-items-center flex-column  inner" to={`/developers/${product.data().devName}`}>
                                            <img style={{ height: '100%', width: '100%' }} className="img-fluid img shadow-filter rounded-circle" src={product.data().devIcon} alt=""></img>
                                        </Link>
                                    </Stack>
                                )
                            })}
                        </Stack>
                    </Container>
                </Box>
            </>
        )

    }
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)' }}>
                <MavLoading />
            </div>
        )
    }
}
export default Developers;