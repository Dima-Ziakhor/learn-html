import React, { useEffect, useState } from 'react';
import type { TagType } from '../../types';
import { Loader } from '../Loader';
import { fetchTags } from '../../requests/theme';

import './AllTagsTable.scss';

export const AllTagsTable = (): JSX.Element => {
  const [tags, setTags] = useState<TagType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const tagsFromServer = await fetchTags();

      setTags(tagsFromServer);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="tags-table">
      <h3 className="tags-table__title">
        Всі HTML теги
      </h3>

      {
        isLoading
          ? (
            <div className="tags-table__loader">
              <Loader />
            </div>)
          : (
            <table className="tags-table__table">
              <thead className="tags-table__head">
                <tr className="tags-table__row">
                  <th className="tags-table__block tags-table__block--left">
                    Теги
                  </th>

                  <th className="tags-table__block tags-table__block--right">
                    Пояснення
                  </th>
                </tr>
              </thead>

              <tbody className="tags-table__body">
                {
                  tags.map(({ id, name, description }: TagType) => (
                    <tr key={ id } className="tags-table__row">
                      <td className="tags-table__block tags-table__block--left">
                        { name }
                      </td>

                      <td className="tags-table__block tags-table__block--right">
                        { description }
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>)
      }
    </div>
  );
};
