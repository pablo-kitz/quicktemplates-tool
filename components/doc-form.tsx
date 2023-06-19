"use client"
import * as z from 'zod'
import { documentSchema } from "@/lib/validations/document";
import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from "@/lib/utils";
import { Input, Textarea, buttonVariants } from "./ui";
import { useTextSelection } from '@/hooks/use-text-selection';
import { useCallback, useEffect, useRef, useState } from 'react';
import { inputVariants } from './ui/input';
import { headers } from 'next/dist/client/components/headers';

enum PlaceholderTypes {
  Input,
  Boolean,
  Select
}

type FormValues = {
  title: string,
  text: string,
  placeholders: {
    name: string,
    // type: PlaceholderTypes
  }[]
}

// type FormData = z.infer<typeof documentSchema>

const testDoc = {
  title: "this is a test",
  text: "I am {trying}",
  placeholders: {
    name: "trying"
  }
}

export function DocForm({ className, props }: { className?: string, props?: any }) {
  const {
    register,
    watch,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(documentSchema) })
  const { fields, append, remove } = useFieldArray({ name: "placeholders", control })

  const { textContent, isCollapsed } = useTextSelection();

  const addPlaceholder = () => {
  }



  const onSubmit = (data: FormValues) => {
    console.log(data)
    // data.id = `doc_${localStorage.length}`
    // console.log(errors)
    // localStorage.setItem(data.id, JSON.stringify(data));


  }

  async function onClick() {
    const response = await fetch("/api/docs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(testDoc)
    })
  }

  return (
    <>
      <form
        {...props}
        className={cn(className, "flex gap-2 grow flex-col justify-between")}
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          placeholder="Document Title"
          {...register('title', { required: true })} />
        {errors?.title && <span className="text-red-500 text-xs">This field is required</span>}
        <Input
          id="text"
          placeholder="Document Text"
          className="flex-1"
          {...register("text", { required: true })} />
        {errors?.title && <span className="text-red-500 text-xs">This field is required</span>}
        <button className={cn(buttonVariants())}>{textContent}</button>
        <div className="flex items-end justify-center py-2">
          <button
            type='submit'
            onSubmit={handleSubmit(onSubmit)}
            className={cn(buttonVariants(), className)}>
            Save Document
          </button>
          <button
            onClick={onClick}>
            This tests
          </button>
        </div>
        <DevTool control={control} />
      </form >
    </>
  )
}
