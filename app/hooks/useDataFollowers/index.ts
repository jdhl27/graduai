import { useEffect, useState } from 'react';
import request from '@app/helpers/requests';
import {itemsType} from '@app/types/hooks/useSearch';

type UserDetailType = {
  data: {
    labels: string[],
    values: number[]
  };
  loading: boolean;
  error: any
};

export const useDataFollowers = (users: itemsType[]): UserDetailType => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let arrayLabels: string[] = [];
        let arrayValues: number[] = [];

        const promises = users.map(async (item: itemsType) => {
          const { login } = item;
          const { data } = await request.get(`users/${login}`);
          
          arrayLabels.push(login.substring(0, 4) + "...");
          arrayValues.push(data.followers);
        });

        await Promise.all(promises);

        setData({
          labels: arrayLabels,
          values: arrayValues
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [users]);

  return { data, error, loading };
};

