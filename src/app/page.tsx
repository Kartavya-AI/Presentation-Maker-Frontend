"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import presentationIllustration from "../../public/images/Presentation Maker_Transforms-DjCrAja6.jpg";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from '../../public/images/profile.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Arjun Malhotra",
        username: "@arjun_founder",
        body: "Presentation Maker turned my rough pitch notes into a polished investor deck in minutes. Saved me days of work before my funding round."
    },
    {
        name: "Neha Gupta",
        username: "@neha_g",
        body: "The auto-generated layouts and branded themes made our sales proposal look like it came from a professional design team."
    },
    {
        name: "Vikram Rao",
        username: "@vikram_startup",
        body: "I just pasted my product overview, and Presentation Maker built a complete product walkthrough presentation — with speaker notes!"
    },
    {
        name: "Sofia Khan",
        username: "@sofia_k",
        body: "We used Presentation Maker to repackage our quarterly report for the board. The slides looked clean, on-brand, and ready to present."
    },
    {
        name: "Karan Patel",
        username: "@karanp_growth",
        body: "Instead of spending hours formatting, I could focus on refining the message. Presentation Maker handled all the visuals perfectly."
    },
    {
        name: "Emily Chen",
        username: "@emily_builds",
        body: "As someone who’s not a designer, creating beautiful decks used to be stressful. Now it’s as easy as writing an email."
    }
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Input Your Content",
        description:
            "Start by pasting your business idea, brief, or structured notes. You can add key points, data, or even raw text — no formatting needed."
    },
    {
        title: "Step 2: Choose Presentation Type",
        description:
            "Select the format you need — investor pitch, product demo, sales proposal, internal report, or custom template."
    },
    {
        title: "Step 3: Let AI Organize & Design",
        description:
            "The Presentation Maker automatically generates titles, bullet points, and layout suggestions, applying branded templates and themes."
    },
    {
        title: "Step 4: Customize & Refine",
        description:
            "Edit slide text, rearrange sections, and tweak visuals to perfectly match your messaging and audience."
    },
    {
        title: "Step 5: Add Speaker Notes",
        description:
            "Enhance your delivery with AI-generated talking points and cues for each slide — great for confident presentations."
    },
    {
        title: "Step 6: Export & Share",
        description:
            "Download your presentation in PowerPoint, Google Slides, or PDF format, ready for meetings, pitches, or sharing with your team."
    }
];



export default function Home() {
    const { theme } = useTheme();
    return (
        <main className="mx-auto">
            <VantaFog />
          <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
    <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <span
            className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
                WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
            }}
        />
        🎯
        <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
            AI-Powered Presentation Maker for Professionals & Teams
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>

    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
        Turn Your Ideas <AuroraText>Into Stunning Decks</AuroraText>  
        — In Minutes, Not Hours
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Transform plain text, briefs, or summaries into ready-to-share, professional-grade presentations. Automatically designed, branded, and structured — so you can focus on your message, not formatting.
    </p>

    <div className="">
        <Link href="/create">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Create My Presentation
                </span>
            </ShimmerButton>
        </Link>
    </div>
</section>



            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

         <section className="flex mt-10 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Create Stunning Presentations — Powered by AI.
        </h2>
        <p className="text-lg text-muted-foreground">
            Presentation Maker transforms your ideas, briefs, or summaries into professional, ready-to-share decks. Automatically designed, branded, and structured — so you spend less time formatting and more time delivering impact.
        </p>
        <Link href="/create">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Create My Presentation
                </span>
            </ShimmerButton>
        </Link>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
        <Image
            src={presentationIllustration} // Replace with your Presentation Maker illustration path
            alt="AI-Powered Presentation Maker"
            className="w-full max-w-md h-96 object-cover"
            width={10}
            height={10}
            unoptimized
        />
    </div>
</section>



            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

          <section className="px-4 md:px-36 mt-20">
    <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
    >
        <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

        <AccordionItem value="item-1">
            <AccordionTrigger>
                1. What is Presentation Maker?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Presentation Maker is an AI-powered tool that instantly turns your ideas, briefs, or summaries into polished, professional presentations. It handles formatting, layout, and design so you can focus on your message.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>
                2. How does it work?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Simply paste or describe your content. The AI organizes it into slides, suggests layouts, applies branded themes, and generates titles, bullet points, and visuals — ready for export.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>
                3. What types of presentations can it create?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    It supports pitch decks, investor presentations, product demos, sales proposals, strategy reports, training decks, and more — with customizable templates for each format.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger>
                4. Can I use my own branding?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. You can upload your logo, choose your brand colors, and set fonts so every presentation matches your identity perfectly.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
            <AccordionTrigger>
                5. Does it work with PowerPoint and Google Slides?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Absolutely. You can export your deck directly to PowerPoint, Google Slides, or PDF for easy sharing and editing.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
            <AccordionTrigger>
                6. Can I edit the slides after generation?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. All decks are fully editable. You can tweak text, layouts, images, and notes before sharing or presenting.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
            <AccordionTrigger>
                7. Does it include speaker notes?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. The AI can auto-generate speaker cues and talking points for each slide, so you’re prepared for any presentation.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
            <AccordionTrigger>
                8. Is it only for business users?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Not at all. It’s great for educators, freelancers, consultants, students, and anyone who needs to present ideas clearly and professionally.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
            <AccordionTrigger>
                9. Is there a free version?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. You can try core features for free. Advanced templates, branding options, and premium export formats are available with a paid plan.
                </p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</section>


        </main>
    );
}
