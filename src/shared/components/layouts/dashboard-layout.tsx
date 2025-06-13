type DashBoardLayoutProp = {
  children: React.ReactNode;
};

export default function DashBoardLayout({ children }: DashBoardLayoutProp) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ flex: '1', backgroundColor: 'green' }}>sidebard</aside>
      <div style={{ flex: '3' }}>
        <nav
          style={{ padding: '20px', color: 'white', backgroundColor: 'red' }}
        >
          navebard
        </nav>
        <main style={{ padding: '20px' }}>{children}</main>
      </div>
    </div>
  );
}
