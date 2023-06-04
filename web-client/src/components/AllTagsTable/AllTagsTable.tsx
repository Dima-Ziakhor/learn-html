import React, { useEffect, useState } from 'react';
import type { TagType } from '../../types';
import { fetchTags } from '../../requests/theme';

import './AllTagsTable.scss';

export const AllTagsTable = (): JSX.Element => {
  const [tags, setTags] = useState<TagType[]>([]);

  useEffect(() => {
    (async () => {
      const tagsFromServer = await fetchTags();

      setTags(tagsFromServer);
    })();
  }, []);

  return (
    <div className="tags-table">
      <h3 className="tags-table__title">
        Всі HTML теги
      </h3>

      <table className="tags-table__table">
        <thead>
          <tr>
            <th>
              Теги
            </th>

            <th>
              Пояснення
            </th>
          </tr>
        </thead>

        <tbody>
          {
            tags.map(({ id, name, description }: TagType) => (
              <tr key={ id }>
                <td>
                  { name }
                </td>

                <td>
                  { description }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
