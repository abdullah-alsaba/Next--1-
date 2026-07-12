"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { ListBox, Select } from "@heroui/react";


export function AddTask({ addATask }) {
  return (
    <Modal>
      <Button variant="secondary">Add Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={addATask} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="title"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Title</Label>
                    <Input placeholder="Enter task title" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="description"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Description</Label>
                    <Input placeholder="Enter task description" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Select
                      name="priority"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>Priority</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="high" textValue="high">
                            High
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="medium" textValue="medium">
                            Medium
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="low" textValue="low">
                            Low
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Add Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
