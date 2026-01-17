"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        const isDark = savedTheme ? savedTheme === "dark" : prefersDark

        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <>{children}</>
}
