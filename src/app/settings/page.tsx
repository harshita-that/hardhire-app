import { PageContainer } from "@/components/layout/page-container";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Settings"
        description="System configuration"
      />

      <Section title="General">
        <Card>
          <CardHeader className="mb-0">
            <CardTitle>Workspace</CardTitle>
            <CardDescription>
              Settings panel coming next — auth, API keys, roles, and more.
            </CardDescription>
          </CardHeader>
        </Card>
      </Section>
    </PageContainer>
  );
}
