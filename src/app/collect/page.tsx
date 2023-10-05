'use client';
import { useEffect, useState } from 'react';

import CollectAPI from '@/api/collectAPI';

import OneItem from './_components/OneItem';
import FilterSelect from './_components/Select';
import SkeletonLoader from './_components/SkeletonLoader';

export interface CulturalEventRow {
  MAIN_IMG: string;
  ORG_NAME: string;
  TITLE: string;
  CODENAME: string;
}

interface CulturalEventInfo {
  list_total_count: number;
  culturalEventInfo: {
    row: CulturalEventRow[];
  };
}

const Collect = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
  const [data, setData] = useState<CulturalEventInfo | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    CollectAPI(1, 50)
      .then((dataString) => {
        const parsedData = JSON.parse(dataString);
        setData(parsedData);
      })
      .catch((error) => {
        console.error('에러 발생', error);
      });
  }, [apiKey, selectedValue]);

  return (
    <div className='flex flex-col items-center max-w-7xl m-auto'>
      <h1 className='text-4xl font-bold my-16'>행사 모아보기</h1>
      <FilterSelect onValueChange={setSelectedValue} />
      {data ? (
        <div className='grid grid-cols-3 gap-4'>
          {data?.culturalEventInfo?.row
            ?.filter(
              (item) =>
                !selectedValue || selectedValue === '전체' || item.CODENAME === selectedValue,
            ) // 선택한 값이 없거나 값이 전체이거나 CODENAME과 일치하는 경우에만 필터링
            .map((item, idx) => (
              <div key={idx} className='p-4'>
                <OneItem item={item} />
              </div>
            ))}
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
};

export default Collect;