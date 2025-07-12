'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BottomSheetProps {
  title: string;
  userName: string;
  createdAt: string;
  isPublic: boolean;
}

export default function BottomSheet({ arr }: { arr: BottomSheetProps[] }) {
  const [sheetHeight, setSheetHeight] = useState(55); // default height in percentage
  const [isTransition, setIsTransition] = useState(false);

  // percentage of the screen height
  const minHeight = 20;
  const defaultHeight = 55;
  const maxHeight = 55;

  interface PointerEventWithButtons extends React.PointerEvent<HTMLDivElement> {
    buttons: number;
  }

  const detectLeftMouse = (e: PointerEventWithButtons): boolean => {
    if ('buttons' in e) {
      return e.buttons === 1; // Modern browsers
    }
    return false; // Legacy browsers fallback
  };

  const dragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!detectLeftMouse(e)) {
      return; // Only allow dragging with the left mouse button
    }

    let startY = e.clientY;
    let initialHeight: number;

    document.onpointermove = dragMove;
    function dragMove(e: PointerEvent) {
      const delta: number = startY - e.clientY;
      initialHeight = sheetHeight + (delta / window.innerHeight) * 100;
      setSheetHeight(Math.max(minHeight, Math.min(initialHeight, maxHeight)));
    }

    document.onpointerup = dragEnd;
    function dragEnd() {
      document.onpointermove = null;
      document.onpointerup = null;

      setIsTransition(true);

      // Set a minimum height of 200px
      if (initialHeight < 35) {
        // initialHeight = 200;
        setSheetHeight(minHeight);
      } else if (initialHeight < 75) {
        // initialHeight = 595;
        setSheetHeight(defaultHeight);
      } else {
        setSheetHeight(maxHeight);
      }

      setTimeout(() => {
        setIsTransition(false);
      }, 300);
    }
  };

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[25px] box-shadow pb-[62px] z-90`}
      style={{
        height: `${sheetHeight}%`,
        transition: isTransition ? 'height 0.2s ease' : 'none',
        // on Mobile
        touchAction: 'none',
        msTouchAction: 'none',
      }}
    >
      <div className="flex justify-center">
        <div
          className="cursor-grab"
          onPointerDown={dragStart}
        >
          <div className="bg-[#D0D9E4] w-[82px] h-[6px] rounded-[15px] my-[12px]" />
        </div>
      </div>
      <div className="p-[18px] pt-[.5rem] mb-[30px]">
        <div>
          <h2 className="text-[2.2rem] font-bold text-gray-900">메모리 목록</h2>
          <p className="text-[1.4rem] text-gray-500 mt-1">
            총 {arr.length}개의 기억이 있습니다
          </p>
        </div>
        <div className="mt-[1.5rem] max-h-[23rem] overflow-y-auto">
          {arr.map((item, index) => (
            <Link
              href={`/memory/${index}`}
              key={index}
              className="flex justify-between items-center p-[1rem] bg-gray-100 rounded-lg mb-[1rem]"
            >
              <div>
                <h3 className="text-[1.6rem] font-semibold">{item.title}</h3>
                <p className="text-[1.4rem] text-gray-600">
                  {item.userName} |{' '}
                  {new Date(item.createdAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <span
                className={`text-[1.4rem] ${
                  item.isPublic ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.isPublic ? '공개' : '비공개'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
