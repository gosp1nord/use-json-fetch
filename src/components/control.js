import React, {useState} from 'react';
import useJsonFetch from './requests';


export const BlockControl = () => {
  let arrAnswer;
  const [link, setLink] = useState({text: ''});

  const handleClickLoad = () => {
    setLink({text: 'http://localhost:7070/loading'})
  }

  const handleClickSuccess = () => {
    setLink({text: 'http://localhost:7070/data'})
  }

  const handleClickError = () => {
    setLink({text: 'http://localhost:7070/error'})
  }

  if (link.text) {
    arrAnswer = <BlockAnswer props={link.text}/>
  } else {
    arrAnswer = [
      <>
      <div className='line'>Статус загрузки:</div>
      <div className='line'>Текст ответа:</div>
      </>
    ]
  }

  return (
    <>
    <div className='block-answer'>
    {arrAnswer}
    </div>

    <div className='block-btn'>
      <div className='btn' onClick={handleClickLoad}>Загрузка</div>
    </div>

    <div className='block-btn'>
      <div className='btn' onClick={handleClickSuccess}>Успех</div>
    </div>

    <div className='block-btn'>
      <div className='btn' onClick={handleClickError}>Ошибка 500</div>
    </div>
    </>
  )
}

const BlockAnswer = ({props}) => {
  const [{data, error, loading}] = useJsonFetch(props);
  let load = '';
  let text = data.data;
  if (loading) {
    load = 'Loading...';
    text = '';
  }
  if (error) {
    text = 'Server error'
  }

  return (
    <>
      <div className='line'>Статус загрузки: {load}</div>
      <div className='line'>Текст ответа: {text}</div>
    </>
  )
}
