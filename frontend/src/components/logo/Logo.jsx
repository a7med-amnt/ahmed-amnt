import { Title } from "#mc";
import { Link, useNavigate } from "#rrd";
import style from "./style.module.css";
export default function () {
    let nav = useNavigate();
    return (
        <Title
            onDoubleClick={() => {
                nav("/dashboard");
            }}
            className={style.logo}
            order={3}
        >
            AM
        </Title>
    );
}
