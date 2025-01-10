"use client";

import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
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
          <FormField
            control={form.control}
            name="name"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Insira seu nome" {...field} />
                </FormControl>
                {formState.touchedFields.name && (
                  <FormMessage>{formState.errors.phone?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel>Celular</FormLabel>
                <FormControl>
                  <Input placeholder="Insira seu celular" {...field} />
                </FormControl>
                {formState.touchedFields.phone && (
                  <FormMessage>{formState.errors.phone?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Insira seu email" {...field} />
                </FormControl>
                {formState.touchedFields.email && (
                  <FormMessage>{formState.errors.phone?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
}
