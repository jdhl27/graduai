import { useEffect, useState } from 'react';
import request from '@app/helpers/requests';
import {userDetailType} from '@app/types/hooks/useSearch';

type UserDetailType = {
  data: userDetailType | null; 
  error: any;
  loading: boolean;
};

export const useUserDetail = (userName: string): UserDetailType => {
  const [data, setData] = useState<userDetailType | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data} = await request.get(`users/${userName}`);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userName]);

  return { data, error, loading };
};

