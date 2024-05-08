import { Flex, Stack, Title, Text, Image } from "#mc";
export default function () {
    
    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                jsutify="center"
            >
                <Image src={"/imgs/developer-pic-1.png"} />
                <Stack>
                    <Title>
                        Turning Vision Into Reality With Code And Design.{" "}
                    </Title>
                    <Text>
                        As a skilled full-stack developer, I am dedicated to
                        turning ideas into innovative web applications. Explore
                        my latest projects and articles, showcasing my expertise
                        in React.js and web development.
                    </Text>
                </Stack>
            </Flex>
            
        </>
    );
}
