import PublicLayout from "../../components/Layout/PublicLayout";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  );
}
