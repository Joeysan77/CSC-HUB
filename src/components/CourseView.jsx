import { useState } from 'react';
import CourseAssignment from './CourseAssignment';

export default function CourseView({ show, course, cors, onClose }) {
  const [filters, setFilters] = useState({
    pending: true,
    submitted: true,
    due: true,
  });

  const [query, setQuery] = useState('');

  const toggleFilter = (type) => {
    setFilters((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredCors = cors.filter((c) => {
    // Filter by active filters
    const passesFilter =
      (filters.pending && !c.completed && !c.due) ||
      (filters.submitted && c.completed) ||
      (filters.due && c.due);

    if (!passesFilter) return false;

    // Filter by search query
    if (!query) return true; // no query => show
    const text = `${c.subject} ${c.date} ${c.contentText || ''}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full overflow-y-auto ${show ? '' : 'hide scale-90'} z-[16] bg-white rounded-xl shadow-lg`}
    >
      <i onClick={onClose}
        className="fal fa-xmark absolute top-0 left-0 text-lg mx-4 my-3 cursor-pointer hblue z-[10]"
      ></i>

      <div className="border-b border-black/10 relative">
        <p className="tblue font-medium my-3 text-center text-lg">{course} Assignments</p>
        <p
          className={`${cors.length >= 1 ? 'tblue blue-sm' : 'tgray gray-sm'} absolute top-0 right-0 mx-4  rounded px-2`}
        >
          {cors.length}
        </p>
      </div>

      {/* Search */}
      <div className="border rounded border-black/20 w90 between flex mt-5 px-3 py-1">
        <input
          className="outline-none w-full"
          type="search"
          placeholder={`Search ${course}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <i className="fal fa-search text-lg px-2"></i>
      </div>

      {/* Filter Buttons */}
      <div className="flex px-3 my-4 mb-8 gap-3 w90">
        <Button
          text="Pending"
          count={cors.filter((c) => !c.completed && !c.due).length}
          type="pending"
          active={filters.pending}
          onClick={() => toggleFilter('pending')}
        />
        <Button
          text="Submitted"
          count={cors.filter((c) => c.completed).length}
          type="submitted"
          active={filters.submitted}
          onClick={() => toggleFilter('submitted')}
        />
        <Button
          text="Due"
          count={cors.filter((c) => c.due).length}
          type="due"
          active={filters.due}
          onClick={() => toggleFilter('due')}
        />
      </div>

      {/* Assignment List */}
      {filteredCors.length > 0 ? (
        filteredCors.map((c) => (
          <CourseAssignment
            key={c.subject + c.date}
            subject={c.subject}
            content={c.content}
            due={c.due}
            dueDate={c.dueDate}
            completed={c.completed}
            date={c.date}
          />
        ))
      ) : (
        <p className="text-center tgray my-10">No assignments match your query.</p>
      )}
    </div>
  );
}

function Button({ text, count, type, active, onClick }) {
 
  return (
    <div
      onClick={onClick}
      className={`${
        active ? `bblue tblue blue-xs font-medium` : 'bgray'
      } flex rounded border py-1 px-2 gap-2 text-sm mr-6 relative cursor-pointer`}
    >
      {active ? (
        <i className="tred fal fa-xmark absolute top-0 -right-5 px-1 py-1 rounded-full "></i>
      ) : (
        ''
      )}
      <p>{text}</p>
      <p>{count}</p>
    </div>
  );
}