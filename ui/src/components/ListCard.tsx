import { Link } from "wouter";

interface ListCardProps {
  id: number;
  content: string;
  light?: boolean;
  created_at: string;
  comment_count?: number;
}

export default function ListCard({
  id,
  content,
  created_at,
  comment_count,
  light = false,
}: ListCardProps) {
  const date = new Date(created_at);

  return (
    <div className={`card ${light && "text-bg-light"} m-2`}>
      <div className="card-header">{date.toLocaleString()}</div>
      <div className="card-body">
        <p className="card-text">{content}</p>
        {comment_count !== undefined && (
          <Link href={`/p/${id}`} className="btn btn-primary btn-sm">
            {comment_count} comments
          </Link>
        )}
      </div>
    </div>
  );
}
