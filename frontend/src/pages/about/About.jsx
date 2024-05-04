import { Flex, Box, Stack, Title, Text, Image } from "#mc";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import style from "./styles/style.module.css";

export default function () {
    return (
        <>
            <Title mb="xl">Passion Fuels Purpose!</Title>
            <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "center", md: "flex-start" }}
            >
                <img className={style.img} src="/imgs/developer-pic-2.png" />
                <Biography />
            </Flex>
            
        </>
    );
}
