import "./style/MeshLoad.css";
import "./style/skeleton.css";

export default function PostLoad() {
  return (
    <div className="container">
        <div className = 'row'>
            <div className = 'col c-item'>
                <div className="c-skeleton-square" />
                <div className="c-skeleton-line" />
                <div className="c-skeleton-line" />
            </div>
            <div className = 'col c-item'>
                <div className="c-skeleton-square" />
                <div className="c-skeleton-line" />
                <div className="c-skeleton-line" />
            </div>
            <div className = 'col c-item'>
                <div className="c-skeleton-square" />
                <div className="c-skeleton-line" />
                <div className="c-skeleton-line" />
            </div>
        </div>
    </div>
  );
}
