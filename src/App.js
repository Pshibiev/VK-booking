import './App.css';
import { useState } from 'react';

function App() {
  
  const [tower, setTower] = useState('A');
  const [floor, setFloor] = useState('3');
  const [room, setRoom] = useState('1');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [comment, setComment] = useState(''); 

  const handleTowerChange = (event) => {
    setTower(event.target.value);
  };
  
  const handleFloorChange = (event) => {
    setFloor(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      tower,
      floor,
      room,
      date,
      startTime,
      endTime,
      comment
    };

    console.log(JSON.stringify(data));
  };

  const handleReset = () => {
    setTower('A');
    setFloor('3');
    setRoom('1');
    setDate('');
    setStartTime('');
    setEndTime('');
    setComment('');
  };

  return (
    <div className='booking-form-container'>
      <h1 className='booking-form-title'>Бронирование переговорной</h1>
        <form className='booking-form' onSubmit={handleSubmit} onReset={handleReset}>

          <label className='booking-form-label'>
            Выберите башню: &nbsp;	
            <select className='booking-form-select' value={tower} onChange={handleTowerChange}>
              <option value='A'>Башня A</option>
              <option value='B'>Башня B</option>
            </select>
          </label>
          <br />

          <label className='booking-form-label'>
            Выберите этаж: &nbsp;	
            <select className='booking-form-select' value={floor} onChange={handleFloorChange}>
              {Array.from({ length: 25}, (_, i) => i + 3).map((floor) => (
                <option key={floor} value={floor}>
                  Этаж {floor}
                </option>
              ))}
            </select>
          </label>
          <br />

          <label className='booking-form-label'>
            Выберите переговорную:
            <br />
            <select className='booking-form-select' value={room} onChange={handleRoomChange}>
              {Array.from({ length: 10}, (_, i) => i + 1).map((room) => (
                <option key={room} value={room}>
                  Переговорная {room}
                </option>
              ))}
            </select>
          </label>
          <br />

          <label className='booking-form-label'>
            Выберите дату: &nbsp;	
            <input className='booking-form-input' type='date' value={date} onChange={handleDateChange} />
          </label>
          <br />

          <label className='booking-form-label'>
            Выберите время начала: &nbsp;	
            <input className='booking-form-input' type='time' value={startTime} onChange={handleStartTimeChange} />
          </label>
          <br />

          <label className='booking-form-label'>
            Выберите время окончания: &nbsp;	
            <input className='booking-form-input' type='time' value={endTime} onChange={handleEndTimeChange} />
          </label>
          <br />

          <label className='booking-form-label'>
            Введите комментарий:
            <br />	
            <textarea rows={6} cols={30} maxLength={180} placeholder='Начните печатать...' className='booking-form-textarea' value={comment} onChange={handleCommentChange} />
          </label>
          <br />

          <div className='booking-form-buttons'>

            <button className='booking-form-button' type='submit'>
              Отправить
            </button>

            <button className='booking-form-button' type='reset'>
              Очистить
            </button>

          </div>
        </form>
    </div>
  );
}

export default App;
