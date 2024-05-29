// My simple pagination

export class PaginationContext {
  basePath: string;
  limit: number;
  onChanged: (page: number) => void;
  current: number;

  constructor(
    basePath: string,
    limit: number,
    onChanged: (page: number) => void
  ) {
    this.basePath = basePath;
    this.limit = limit;
    this.onChanged = onChanged;
    this.current = 0;
  }

  getCurrentPage() {
    return this.current;
  }

  setPage(page: number) {
    this.onChanged(page);
  }
}

interface PaginationProps {
  context?: PaginationContext;
}

export function Pagination(props: PaginationProps) {
  let context = props.context;
  if (context == null) context = new PaginationContext("/page/", 7, (_) => {});

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {context.limit <= 7 ? (
          [...Array(context.limit).keys()].map((i) => (
            <li
              className={
                context.getCurrentPage() == i
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <a className="page-link" href={context.basePath + (i + 1)}>
                {i + 1}
              </a>
            </li>
          ))
        ) : (
          <li className="page-item">
            <b className="page-skip">...</b>
          </li>
        )}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
