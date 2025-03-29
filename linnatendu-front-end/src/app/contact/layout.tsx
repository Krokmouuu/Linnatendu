import PublicLayout from "../components/Layout/PublicLayout";

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  );
}