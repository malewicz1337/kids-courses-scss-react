import "../styles/TagFilter.scss";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

const TagFilter = ({ tags, selectedTag, onTagSelect }: TagFilterProps) => {
  return (
    <section className="tag-filter">
      {tags.map((tag) => (
        <button
          key={tag}
          className={tag === selectedTag ? "selected" : ""}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </section>
  );
};

export default TagFilter;
