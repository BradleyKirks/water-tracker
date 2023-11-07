import { Button, ButtonText, Box } from "@gluestack-ui/themed";
export default function Controls({ setVolume, volume }){
    return (
        <Box flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        mt="$8"
        // borderColor="red"
        // borderWidth={2}
        >
       <Button m="$4"  size="xl" rounded="$xl"  onPress={() => setVolume(volume + 250)}>
             <ButtonText>Add :cup_with_straw:</ButtonText>
        </Button>
        <Button m="$4"  size="xl" rounded="$xl"  onPress={() => setVolume(volume + 750)}>
             <ButtonText>Add :jar:</ButtonText>
       </Button>
        <Button m="$4"  size="xl"
        rounded="$xl" action="negative" onPress={() => setVolume (0)}>
             <ButtonText>Reset :arrows_counterclockwise:</ButtonText>
       </Button>
        </Box>
    )
}
    
    
    

