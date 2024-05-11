import { Title } from "#mc";
import { Link } from "#rrd";
import style from "./style.module.css";
export default function () {
    return (
      <Link to="/dashboard">
        <Title className={style.logo} order={3}>
            AM
        </Title>
      </Link>
    );
}
