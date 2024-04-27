import { Skeleton } from '@mui/material';
import "./MainProductViewSkeleton.css"

const MainProductViewSkeleton = () => {
    return (
        <div className='container-product-view'>
            <div className='main-product-view-skeleton d-flex'>
                <Skeleton variant="rounded" height={"300px"} width={"40%"}/>
                <div className='right-side'>
                    <Skeleton variant="text" height={"30px"} width={"35%"}/>
                    <Skeleton  variant="text" height={"30px"} width={"20%"} style={{marginTop:"30px"}}/>
                    <div className='d-flex' style={{marginTop:"30px"}}>
                        <Skeleton  variant="text" height={"30px"} width={"25%"} />
                        <Skeleton  variant="text" height={"30px"} width={"50%"} style={{marginLeft:"30px"}}/>
                    </div>
                    <Skeleton  variant="text" height={"30px"} width={"50%"} style={{marginTop:"30px"}}/>
                    <Skeleton  variant="text" height={"30px"} width={"20%"} />
                    <Skeleton  variant="text" height={"30px"} width={"70%"} style={{marginTop:"30px"}}/>
                </div>
            </div>
        </div>

    );
};

export default MainProductViewSkeleton;