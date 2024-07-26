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
                        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                            {value.docs.map((product) => {
                                return (
                                    <Stack className="col" key={product.id} >
                                        <Link style={{ width: '130px', height: '130px', padding: '5px' }} className="logo hoveredLogo d-flex align-items-center flex-column p-4 inner" to={`/developers/${product.data().devName}`}>
                                            <img style={{ height: '100%', width: '100%' }} className="img-fluid img shadow-filter rounded-circle" src={product.data().devIcon} alt="Mountain View"></img>
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