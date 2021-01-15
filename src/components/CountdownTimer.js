import { useState, useEffect } from 'react';
import { InputNumber, Divider, Menu, Button, Dropdown } from 'antd';
import {
  MenuOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const CountdownTimer = props => {
  const [active, setActive] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const styles = {
    color: 'black',
    fontSize: '25px',
    fontFamily: 'monospace',
    width: '60px',
    border: 'none',
    background: 'none',
    outline: 'none',
    focus: 'none',
    boxShadow: 'none',
  };

  const setTime = () => {
    let sec = hours * 60 * 60 + minutes * 60 + seconds;
    sec--;
    if (sec >= 0) {
      let d = new Date(sec * 1000);
      setHours(d.getUTCHours());
      setMinutes(d.getUTCMinutes());
      setSeconds(d.getUTCSeconds());
    }
  };

  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (active) {
      let tm = setTimeout(() => {
        setTime();
      }, 1000);

      return () => {
        clearTimeout(tm);
      };
    }
  });

  const menu = (
    <Menu theme="light" style={{ background: 'none', boxShadow: 'none' }}>
      <Menu.Item>
        <Button shape="circle" onClick={() => setActive(true)}>
          <PlayCircleOutlined />
        </Button>
        <Divider type="vertical" />
        <Button shape="circle" onClick={() => setActive(!active)}>
          <PauseCircleOutlined />
        </Button>
        <Divider type="vertical" />
        <Button shape="circle" onClick={() => reset()}>
          <ReloadOutlined />
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className="countdown-wrapper"
      style={{
        textAlign: 'center',
        margin: 'auto',
        padding: '30px',
        height: '100vh',
      }}
    >
      <div className="countdown" style={{ width: '100%' }}>
        <div name="countdown-form" style={{ display: 'inline-flex' }}>
          <InputNumber
            size="large"
            min={0}
            max={60}
            value={hours}
            style={styles}
            onChange={value => {
              setHours(value);
            }}
          />
          <InputNumber
            size="large"
            min={0}
            max={60}
            value={minutes}
            style={styles}
            onChange={value => {
              setMinutes(value);
            }}
          />
          <InputNumber
            size="large"
            min={0}
            max={60}
            value={seconds}
            style={styles}
            onChange={value => {
              setSeconds(value);
            }}
          />
        </div>
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

export default CountdownTimer;
