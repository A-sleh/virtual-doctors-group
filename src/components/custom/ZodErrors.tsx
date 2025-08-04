function ZodErrors({ error }: { error: string[] | undefined }) {
  if (!error) return null;
  return (
    <div className="flex items-center gap-1 px-1 pt-2  text-pink-500 text-xs italic">
      {error?.map((err: string, index: number) => {
        return (
          <span key={index}>
            {err}
            {index < error?.length - 1 && ', '}
          </span>
        );
      })}
    </div>
  );
}

export default ZodErrors;
