import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function NisseDisplay({ name, email, wearsHat, id }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription> Nisse nr. {id}</CardDescription>
      </CardHeader>
      <CardContent>
        <p> Email: {email}</p>
      </CardContent>
      <CardFooter>{wearsHat ? <p className="text-green-500">{name} does wear a nissehue</p> : <p className="text-red-500">{name} does not wear a nissehue</p>}</CardFooter>
    </Card>
  );
}

export default NisseDisplay;
