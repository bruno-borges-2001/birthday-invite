"use client";

import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .nonempty("Nome é obrigatório")
    .transform((v) => v.trim()),
  phone: z
    .string()
    .nonempty("Celular é obrigatório")
    .transform((v) => v.replace(/\D/g, "")),
  email: z.string().email("Email inválido"),
});

type FormType = z.infer<typeof formSchema>;

export default function RSVP() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "" },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    const response = await fetch("/api/send_form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseBody = await response.json();

    if (!response.ok) {
      toast({
        title:
          "Erro ao enviar o formulário" +
          (responseBody.error.humanMessage ? "" : ", tente novamente"),
        description: responseBody.error.humanMessage,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Formulário enviado com sucesso",
      description: "Obrigado por confirmar sua presença",
    });

    form.reset({ name: "", phone: "", email: "" });

    router.replace("/");
  });

  return (
    <CardContent className="p-8 flex flex-col items-center space-y-4">
      <CardTitle>Confirme sua Presença</CardTitle>
      <CardDescription>
        Isso não é algo obrigatório, se quiser só me enviar uma mensagem falando
        que vai comparecer já vai ser o suficiente. Mas eu estava inspirando
        quando estava programando
      </CardDescription>
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="p-6 w-full bg-slate-400/40 rounded-xl space-y-4"
        >
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Insira seu nome" {...form.register("name")} />
            </FormControl>
            {form.formState.touchedFields.name && (
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Celular</FormLabel>
            <FormControl>
              <Input
                placeholder="Insira seu celular"
                {...form.register("phone")}
              />
            </FormControl>
            {form.formState.touchedFields.phone && (
              <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Insira seu email"
                {...form.register("email")}
              />
            </FormControl>
            {form.formState.touchedFields.email && (
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            )}
          </FormItem>

          <div className="pt-4">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
}
