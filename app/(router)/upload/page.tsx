'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function UploadPage() {
  const [selectedType, setSelectedType] = useState('사진');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const themes = ['시장', '전쟁', '노포', '자연', '문화', '역사'];

  const toggleTag = (tag: string) => {
    setTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude.toFixed(6));
      setLongitude(position.coords.longitude.toFixed(6));
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>새 콘텐츠 업로드</h1>
      </div>
      <button className={styles.saveButton}>저장</button>

      <div className={styles.typeButtons}>
        {['사진', 'MP3', 'MP4'].map(type => (
          <button
            key={type}
            className={`${styles.typeButton} ${
              selectedType === type ? styles.active : ''
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className={styles.uploadBox}>
        <span className={styles.text}>사진을 업로드하세요</span>
        <span className={styles.subText}>
          JPG, PNG 파일을 선택하거나 드래그하세요
        </span>
      </div>
      <p>매체 제목</p>

      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className={styles.input}
      />
      <p>간단한 설명</p>
      <textarea
        placeholder="설명을 입력하세요"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className={styles.textarea}
        rows={3}
      ></textarea>
      <p>위치 좌표</p>
      <div className={styles.location}>
        <input
          type="text"
          placeholder="위도"
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
          className={styles.inputSmall}
        />
        <input
          type="text"
          placeholder="경도"
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
          className={styles.inputSmall}
        />
      </div>

      <div className={styles.themeSection}>
        <p>테마</p>
        <div className={styles.tags}>
          {themes.map(theme => (
            <button
              key={theme}
              onClick={() => toggleTag(theme)}
              className={`${styles.tagButton} ${
                tags.includes(theme) ? styles.tagActive : ''
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
