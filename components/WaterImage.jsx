import { Box, Image } from "@gluestack-ui/themed";
import drops from "../assets/splash-square.jpg";
export default function WaterImage(){
    return(
        <Box rounded="$full">
            <Image
            source={drops}
            alt="Water droplets on glass"
            borderColor="$white"
            borderWidth={4}
            size="2xl"
            rounded={"$full"}
            />
        </Box>
    )
}