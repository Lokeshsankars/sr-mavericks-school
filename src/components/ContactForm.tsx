import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendInquiryToWhatsApp, InquiryFormData } from "@/utils/whatsapp";
import { toast } from "sonner";
import { Send } from "lucide-react";

const formSchema = z.object({
  studentFirstName: z.string().trim().min(1, "First name is required").max(50, "Name too long"),
  studentLastName: z.string().trim().min(1, "Last name is required").max(50, "Name too long"),
  gender: z.enum(["Male", "Female"], { required_error: "Please select gender" }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  academicYear: z.string().min(1, "Please select academic year"),
  studentCategory: z.string().min(1, "Please select category"),
  gradeApplyingFor: z.string().min(1, "Please select grade"),
  email: z.string().trim().email("Invalid email address").max(100, "Email too long"),
  parentMobile: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  parentName: z.string().trim().min(1, "Parent name is required").max(100, "Name too long"),
  message: z.string().trim().max(500, "Message too long").optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentFirstName: "",
      studentLastName: "",
      gender: undefined,
      dateOfBirth: "",
      academicYear: "",
      studentCategory: "",
      gradeApplyingFor: "",
      email: "",
      parentMobile: "",
      parentName: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const inquiryData: InquiryFormData = {
        studentFirstName: data.studentFirstName,
        studentLastName: data.studentLastName,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        academicYear: data.academicYear,
        studentCategory: data.studentCategory,
        gradeApplyingFor: data.gradeApplyingFor,
        email: data.email,
        parentMobile: data.parentMobile,
        parentName: data.parentName,
        message: data.message || "",
      };
      
      sendInquiryToWhatsApp(inquiryData);
      toast.success("Opening WhatsApp to send your inquiry!");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="studentFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student's First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentLastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student's Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Gender & DOB Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-6 pt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="male" />
                      <label htmlFor="male" className="text-sm cursor-pointer">Male</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="female" />
                      <label htmlFor="female" className="text-sm cursor-pointer">Female</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Academic Year & Category Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="academicYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Academic Year</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2025-2026">2025–2026</SelectItem>
                    <SelectItem value="2026-2027">2026–2027</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Category</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="New Admission">New Admission</SelectItem>
                    <SelectItem value="Transfer">Transfer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Grade & Email Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="gradeApplyingFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade Applying For</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Nursery">Nursery</SelectItem>
                    <SelectItem value="LKG">LKG</SelectItem>
                    <SelectItem value="UKG">UKG</SelectItem>
                    <SelectItem value="Primary (1-3)">Primary (1 to 3)</SelectItem>
                    <SelectItem value="Primary (4-5)">Primary (4 to 5)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="parent@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Parent Details Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="parentMobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent's Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="10-digit number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent's Name</FormLabel>
                <FormControl>
                  <Input placeholder="Parent Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any additional information or questions..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
        >
          <Send className="mr-2 h-5 w-5" />
          {isSubmitting ? "Sending..." : "Submit via WhatsApp"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
