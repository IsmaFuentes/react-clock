import { useEffect, useState } from 'react';
import { Button, Dropdown, Menu, Divider } from 'antd';
import {
  MenuOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const Chronometer = props => {
  const { color, fontSize, fontFamily, spacing } = props;
  const [time, setTime] = useState('00:00:00');
  const [active, setActive] = useState(false);

  const styles = {
    color: color ? color : '#17d4fe',
    fontSize: fontSize ? fontSize : '25px',
    fontFamily: fontFamily ? fontFamily : 'monospace',
    letterSpacing: spacing ? spacing : '7px',
  };

  const wrapperStyles = {
    textAlign: 'center',
    margin: 'auto',
    padding: '30px',
    height: '100vh',
  };

  const resetTime = () => {
    setTime('00:00:00');
  };

  const updateTime = () => {
    let h = parseInt(time.split(':')[0]);
    let m = parseInt(time.split(':')[1]);
    let s = parseInt(time.split(':')[2]);

    if (s < 60) {
      s++;
    } else {
      s = 0;
      if (m < 60) {
        m++;
      } else {
        m = 0;
        h++;
      }
    }

    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;

    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    if (active) {
      let tm = setTimeout(() => {
        setTime(updateTime());
      }, 1000);

      return () => {
        clearTimeout(tm);
      };
    }
  });

  const menu = (
    <Menu theme="light" style={{ background: 'none', boxShadow: 'none' }}>
      <Menu.Item>
        <Button type="default" shape="circle" onClick={() => setActive(true)}>
          <PlayCircleOutlined />
        </Button>
        <Divider type="vertical" />
        <Button type="default" shape="circle" onClick={() => setActive(false)}>
          <PauseCircleOutlined />
        </Button>
        <Divider type="vertical" />
        <Button type="default" shape="circle" onClick={() => resetTime()}>
          <ReloadOutlined />
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="timer-wrapper" style={wrapperStyles}>
      <div className="timer" style={styles}>
        {time}
      </div>
      <Divider />
      <div className="actions" style={{ position: 'relative', top: '40vh' }}>
        <Dropdown overlay={menu} placement="topCenter" transitionName="fade">
          <Button shape="circle" type="default">
            <MenuOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Chronometer;
