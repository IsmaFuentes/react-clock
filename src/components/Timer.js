import { useEffect, useState } from 'react';
import { Divider } from 'antd';

const Timer = props => {
  const GetTime = () => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    if (parseInt(h) === 0) h = 12;
    if (parseInt(h) > 12) {
      h = h - 12;
      session = 'PM';
    }

    h = parseInt(h) < 10 ? '0' + h : h;
    m = parseInt(m) < 10 ? '0' + m : m;
    s = parseInt(s) < 10 ? '0' + s : s;

    return `${h}:${m}:${s} ${session}`;
  };

  const [time, setTime] = useState(GetTime());
  const { fontSize, color, fontFamily, spacing } = props;

  const styles = {
    color: color ? color : '#17d4fe',
    fontSize: fontSize ? fontSize : '25px',
    fontFamily: fontFamily ? fontFamily : 'monospace',
    letterSpacing: spacing ? spacing : '7px',
  };

  useEffect(() => {
    let tm = setTimeout(() => {
      setTime(GetTime());
    }, 1000);

    return () => {
      clearTimeout(tm);
    };
  });

  return (
    <div
      className="timer-wrapper"
      style={{
        textAlign: 'center',
        margin: 'auto',
        padding: '30px',
        height: '100vh',
      }}
    >
      <div className="timer" style={styles}>
        {time}
      </div>
      <Divider />
    </div>
  );
};

export default Timer;
